import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fillFormMinorsRelease } from "../../utils/fillPdf";
import { estadosMexico, abreviaturasEstados } from "../../utils/constEstados";
import HelpTooltip from "../HelpTooltip";

const nombresDisciplinas = {
  "bareback-riding": "Caballos con pretal",
  "saddlebronc-riding": "Caballos con montura",
  "bull-riding": "Jineteo de toros",
  "tie-down": "Lazo de becerro",
  "steer-wrestling": "Achatada de novillos",
  "team-roping": "Lazo por parejas",
  "team-ropingF": "Lazo por parejas",
  "barrel-racing": "Carrera de barriles",
  "pole-bending": "Carrera entre polos",
  "goat-tying": "Amarrre de chiva",
  "breakaway": "Lazo en falso",
  "queen-contest": "Reina",
};

const validationSchema = Yup.object().shape({
  // Campos existentes
  memberName: Yup.string().required("Requerido"),
  address: Yup.string().required("Requerido"),
  city: Yup.string().required("Requerido"),
  state: Yup.string()
    .required("Selecciona un estado")
    .oneOf(estadosMexico, "Estado no válido"),
  zip: Yup.string()
    .matches(/^\d{5}$/, "Código postal inválido")
    .required("Requerido"),
  telephone: Yup.string()
    .min(10, "Número de teléfono inválido")
    .required("Requerido"),
  birthDate: Yup.date()
    .max(new Date(), "La fecha no puede ser futura")
    .required("Requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Requerido"),
  secondaryTelephone: Yup.string()
    .min(10, "Número de teléfono inválido")
    .nullable(),
  gender: Yup.string()
    .required("Requerido")
    .oneOf(["masculino", "femenino"], "Selecciona una opción válida"),

  membershipType: Yup.string()
    .required("Requerido")
    .oneOf(["novato", "renovacion"], "Selecciona un tipo de membresía")
    .test(
      "valid-membership-type",
      "No puedes ser novato si ya haz participado anteriormente en NHSRA",
      function (value) {
        const nhsraYears = this.parent.nhsraYears;
        if (nhsraYears > 1 && value === "novato") {
          return false;
        }
        return true;
      }
    ),

  nhsraYears: Yup.number()
    .required("Requerido")
    .min(1, "Mínimo 1 año")
    .max(4, "Máximo 4 años")
    .test(
      "valid-nhsra-years",
      "Si es tu primer año, seleccionar novato en el campo de novato o renovacion",
      function (value) {
        const membershipType = this.parent.membershipType;
        if (membershipType === "renovacion" && value < 2) {
          return false;
        }
        return true;
      }
    ),

  jhYearsPaid: Yup.number()
    .required("Requerido")
    .min(0, "Mínimo 0")
    .max(3, "Máximo 3"),
  school: Yup.object().shape({
    name: Yup.string().required("Nombre de la escuela requerido"),
    city: Yup.string().required("Ciudad de la escuela requerida"),
    state: Yup.string()
      .required("Estado de la escuela requerido")
      .oneOf(estadosMexico, "Estado no válido"),
    type: Yup.string()
      .required("Requerido")
      .oneOf(["publica", "privada", "casa"], "Selecciona un tipo válido"),
    grade: Yup.number()
      .required("Requerido")
      .min(9, "Grado mínimo 9")
      .max(12, "Grado máximo 12"),
  }),
  events: Yup.array()
    .of(Yup.string())
    .test(
      "valid-events",
      "Debes seleccionar al menos una disciplina",
      function (value) {
        return value && value.length > 0;
      }
    )
    .test(
      "valid-gender-events",
      "Solo puedes seleccionar disciplinas correspondientes a tu género",
      function (value) {
        const gender = this.parent.gender;
        const eventsMale = [
          "bareback-riding",
          "saddlebronc-riding",
          "bull-riding",
          "tie-down",
          "steer-wrestling",
          "team-roping",
        ];
        const eventsFemale = [
          "team-ropingF",
          "barrel-racing",
          "pole-bending",
          "goat-tying",
          "breakaway",
          "queen-contest",
        ];

        if (gender === "masculino") {
          return value.every((event) =>
            eventsMale.includes(event)
          );
        } else if (gender === "femenino") {
          return value.every((event) =>
            eventsFemale.includes(event)
          );
        }
        return true;
      }
    ),
});

const HSMembershipForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      memberName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      telephone: "",
      birthDate: "",
      email: "",
      secondaryTelephone: "",
      gender: "",
      membershipType: "",
      nhsraYears: "",
      jhYearsPaid: "",
      school: {
        name: "",
        city: "",
        state: "",
        type: "",
        grade: "",
      },
      events: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Sección de Información Personal */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Información Personal</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Nombre Completo
            </label>
            <input
              name="memberName"
              {...formik.getFieldProps("memberName")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.memberName && formik.errors.memberName && (
              <div className="text-red-500 text-sm">
                {formik.errors.memberName}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="birthDate"
              max={new Date().toISOString().split("T")[0]}
              {...formik.getFieldProps("birthDate")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.birthDate && formik.errors.birthDate && (
              <div className="text-red-500 text-sm">
                {formik.errors.birthDate}
              </div>
            )}
          </div>
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-black">
            Dirección
          </label>
          <input
            name="address"
            {...formik.getFieldProps("address")}
            className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>

        {/* Ciudad, Estado, ZIP */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Ciudad
            </label>
            <input
              name="city"
              {...formik.getFieldProps("city")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Estado
            </label>
            <select
              name="state"
              {...formik.getFieldProps("state")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Selecciona un estado</option>
              {estadosMexico.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state && (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Código Postal
            </label>
            <input
              type="text"
              pattern="[0-9]{5}"
              maxLength="5"
              name="zip"
              {...formik.getFieldProps("zip")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.zip && formik.errors.zip && (
              <div className="text-red-500 text-sm">{formik.errors.zip}</div>
            )}
          </div>
        </div>

        {/* Teléfonos */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Teléfono
            </label>
            <input
              name="telephone"
              {...formik.getFieldProps("telephone")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.telephone && formik.errors.telephone && (
              <div className="text-red-500 text-sm">
                {formik.errors.telephone}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Teléfono Secundario
            </label>
            <input
              name="secondaryTelephone"
              {...formik.getFieldProps("secondaryTelephone")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.secondaryTelephone &&
              formik.errors.secondaryTelephone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.secondaryTelephone}
                </div>
              )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Género
            </label>
            <select
              name="gender"
              {...formik.getFieldProps("gender")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de Membresía */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Membresía</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <label className="block text-sm font-medium text-black">
                Novato o renovación
              </label>
              <HelpTooltip
                content={
                  <>
                    <p className="font-semibold mb-1">Se considera:</p>
                    <ul className="list-disc pl-3">
                      <li>
                        <strong>Novato:</strong> Primera vez que pagas la
                        membresía
                      </li>
                      <li>
                        <strong>Renovación:</strong> Si ya haz pagado
                        anteriormente la membresía
                      </li>
                    </ul>
                  </>
                }
                position="top"
              />
            </div>

            <select
              name="membershipType"
              {...formik.getFieldProps("membershipType")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              <option value="novato">Novato</option>
              <option value="renovacion">Renovación</option>
            </select>
            {formik.touched.membershipType && formik.errors.membershipType && (
              <div className="text-red-500 text-sm">
                {formik.errors.membershipType}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-1 mb-1">
              <label className="block text-sm font-medium text-black">
                Años en NHSRA
              </label>
              <HelpTooltip
                content={
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Importante:</p>
                    <p>
                      Incluir el año actual en el conteo de años como miembro.
                    </p>
                    <p>Ejemplo: Si es tu primer año, selecciona 1</p>
                  </div>
                }
                position="top"
              />
            </div>

            <select
              name="nhsraYears"
              {...formik.getFieldProps("nhsraYears")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {formik.touched.nhsraYears && formik.errors.nhsraYears && (
              <div className="text-red-500 text-sm">
                {formik.errors.nhsraYears}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-1 mb-1">
              <label className="block text-sm font-medium text-black">
                Años pagados en JH Division
              </label>
              <HelpTooltip
                content={
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Seleccionar:</p>
                    <p>
                      el número de años que se formó parte de la división de
                      Junior High (en caso de no haber participado en esta
                      división seleccionar el 0).
                    </p>
                  </div>
                }
                position="top"
              />
            </div>

            <select
              name="jhYearsPaid"
              {...formik.getFieldProps("jhYearsPaid")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              {[0, 1, 2, 3].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {formik.touched.jhYearsPaid && formik.errors.jhYearsPaid && (
              <div className="text-red-500 text-sm">
                {formik.errors.jhYearsPaid}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de Información Escolar */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Información Escolar</h3>

        <div>
          <label className="block text-sm font-medium text-black">
            Nombre de la Escuela
          </label>
          <input
            name="school.name"
            {...formik.getFieldProps("school.name")}
            className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
          />
          {formik.touched.school?.name && formik.errors.school?.name && (
            <div className="text-red-500 text-sm">
              {formik.errors.school.name}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Ciudad
            </label>
            <input
              name="school.city"
              {...formik.getFieldProps("school.city")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            />
            {formik.touched.school?.city && formik.errors.school?.city && (
              <div className="text-red-500 text-sm">
                {formik.errors.school.city}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Estado
            </label>
            <select
              name="school.state"
              {...formik.getFieldProps("school.state")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              {estadosMexico.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            {formik.touched.school?.state && formik.errors.school?.state && (
              <div className="text-red-500 text-sm">
                {formik.errors.school.state}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Tipo de Escuela
            </label>
            <select
              name="school.type"
              {...formik.getFieldProps("school.type")}
              className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
            >
              <option value="">Seleccionar</option>
              <option value="publica">Pública</option>
              <option value="privada">Privada</option>
              <option value="casa">Escuela en Casa</option>
            </select>
            {formik.touched.school?.type && formik.errors.school?.type && (
              <div className="text-red-500 text-sm">
                {formik.errors.school.type}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Grado Actual
          </label>
          <select
            name="school.grade"
            {...formik.getFieldProps("school.grade")}
            className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
          >
            <option value="">Seleccionar</option>
            {[9, 10, 11, 12].map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {formik.touched.school?.grade && formik.errors.school?.grade && (
            <div className="text-red-500 text-sm">
              {formik.errors.school.grade}
            </div>
          )}
        </div>
      </div>

      {/* Sección de Disciplinas */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disciplinas</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Disciplinas Varonil */}
          <div className="space-y-2">
            <h4 className="font-medium">Categoría Varonil</h4>
            {[
              "bareback-riding",
              "saddlebronc-riding",
              "bull-riding",
              "tie-down",
              "steer-wrestling",
              "team-roping",
            ].map((event) => (
              <label key={event} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="events"
                  value={event}
                  checked={formik.values.events?.includes(event)}
                  onChange={formik.handleChange}
                />
                {nombresDisciplinas[event]}
              </label>
            ))}
          </div>

          {/* Disciplinas Femenil */}
          <div className="space-y-2">
            <h4 className="font-medium">Categoría Femenil</h4>
            {[
              "team-ropingF",
              "barrel-racing",
              "pole-bending",
              "goat-tying",
              "breakaway",
              "queen-contest",
            ].map((event) => (
              <label key={event} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="events"
                  value={event}
                  checked={formik.values.events?.includes(event)}
                  onChange={formik.handleChange}
                />
                {nombresDisciplinas[event]}
              </label>
            ))}
          </div>
        </div>
        {formik.touched.events && formik.errors.events && (
          <div className="text-red-500 text-sm">{formik.errors.events}</div>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Descargar Permiso
        </button>
      </div>
    </form>
  );
};

export default HSMembershipForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fillFormMinorsRelease } from "../../utils/fillPdf";
import { estadosMexico, abreviaturasEstados } from "../../utils/constEstados";

const validationSchema = Yup.object().shape({
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
  fatherName: Yup.string().required("Requerido"),
  motherName: Yup.string().required("Requerido"),
});

const MinorsReleaseForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      memberName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      telephone: "",
      birthDate: "",
      fatherName: "",
      motherName: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const [year, month, day] = values.birthDate.split("-");
      const newValues = {
        ...values,
        year,
        month,
        day,
        state: abreviaturasEstados[values.state] || values.state,
      };
      console.log(newValues);
      try {
        await fillFormMinorsRelease(newValues);
        alert("Formato llenado correctamente");
      } catch (error) {
        console.error("Error al llenar formato", error);
        alert(
          "Hubo un error al llenar el formato, por favor intenta nuevamente o descarga el formato en blanco y llenalo manualmente"
        );
      }

      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Nombre Completo */}
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
          <div className="text-red-500 text-sm">{formik.errors.memberName}</div>
        )}
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
          <label className="block text-sm font-medium text-black">Ciudad</label>
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
          <label className="block text-sm font-medium text-black">Estado</label>
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

      {/* Teléfono y Fecha de Nacimiento */}
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

      {/* Nombres de los padres */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre completo del Padre
          </label>
          <input
            name="fatherName"
            {...formik.getFieldProps("fatherName")}
            className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
          />
          {formik.touched.fatherName && formik.errors.fatherName && (
            <div className="text-red-500 text-sm">
              {formik.errors.fatherName}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Nombre completo de la Madre
          </label>
          <input
            name="motherName"
            {...formik.getFieldProps("motherName")}
            className="mt-1 block w-full rounded-md outline-1 outline-blue-400 shadow-sm border border-gray-300"
          />
          {formik.touched.motherName && formik.errors.motherName && (
            <div className="text-red-500 text-sm">
              {formik.errors.motherName}
            </div>
          )}
        </div>
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

export default MinorsReleaseForm;

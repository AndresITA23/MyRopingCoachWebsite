import { PDFDocument } from 'pdf-lib'
import { saveAs } from 'file-saver';

export async function fillFormMinorsRelease(data) {
  const formUrl = 'https://firebasestorage.googleapis.com/v0/b/mxhsra.firebasestorage.app/o/documentos%2Fnhsra%2Fformatos%2FJuvenilMayor.MAMR.25.MEXICO.pdf?alt=media&token=56d9a394-0ad3-4336-8cb3-a5c0c2031c69'
  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(formPdfBytes)
  
  const form = pdfDoc.getForm()

  const memberNameField = form.getTextField('Name')
  const address = form.getTextField('MemberAddress')
  const city = form.getTextField('City')
  // const state = form.getTextField('State')
  const zip = form.getTextField('Zip')
  const telephone = form.getTextField('Phone')
  const month = form.getTextField('Month')
  const day = form.getTextField('Day')
  const year = form.getTextField('Year')
  // const fatherName = form.getTextField('FatherName')
  // const motherName = form.getTextField('MotherName')
  // const legalGuardianName = form.getTextField('LegalGuardianName')
  const daySign = form.getTextField('DaySign')
  const monthSign = form.getTextField('MonthSign')
  const yearSign = form.getTextField('YearSign')

  memberNameField.setText(data.memberName)
  address.setText(data.address)
  city.setText(data.city)
  // state.setText(data.state)
  zip.setText(data.zip)
  telephone.setText(data.telephone)
  month.setText(data.month)
  day.setText(data.day)
  year.setText(data.year)
  // fatherName.setText(data.fatherName)
  // motherName.setText(data.motherName)

  const currentDate = new Date();
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const shortYear = currentYear.toString().slice(-2);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonthIndex];

  daySign.setText(currentDay)
  monthSign.setText(currentMonthName)
  yearSign.setText(shortYear)
  
  const pdfBytes = await pdfDoc.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const fileName = `${data.memberName.replace(/\s+/g, '')}.MR.${shortYear}.Mexico.pdf`;
  saveAs(blob, fileName);
}

export async function fillFormHSMembership(data) {
  const formUrl = 'https://firebasestorage.googleapis.com/v0/b/mxhsra.firebasestorage.app/o/documentos%2Fnhsra%2Fformatos%2FMinorsRelease2025.pdf?alt=media&token=ed15242c-8a45-4bf0-9649-210b819a74f7'
  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(formPdfBytes)

  const form = pdfDoc.getForm()

  const memberNameField = form.getTextField('MemberName')
  const address = form.getTextField('MemberAddress')
  const city = form.getTextField('City')

  const zip = form.getTextField('Zip')
  const telephone = form.getTextField('Phone')
  const otherTelephone = form.getTextField('OtherPhone')
  const month = form.getTextField('Month')
  const day = form.getTextField('Day')
  const year = form.getTextField('Year')
  const fatherName = form.getTextField('FatherName')
  const motherName = form.getTextField('MotherName')
  const legalGuardianName = form.getTextField('LegalGuardianName')
  const daySign = form.getTextField('DaySign')
  const monthSign = form.getTextField('MonthSign')
  const yearSign = form.getTextField('YearSign')

  const state = form.getTextField('State')

  const email = form.getTextField('Email')
  const gender = form.getTextField('Gender')

  //MembershipType
  const membershipType = form.getTextField('MembershipType')
  const nhsraYears = form.getTextField('NHSRAYears')
  const jhYearsPaid = form.getTextField('JHYearsPaid')

  //School
  const schoolName = form.getTextField('SchoolName')
  const schoolCity = form.getTextField('SchoolCity')
  const schoolState = form.getTextField('SchoolState')
  const schoolType = form.getTextField('SchoolType')
  const schoolGrade = form.getTextField('SchoolGrade')

  //Events
  const eventCheckboxMapping = {
    'jineteo-toros': 'JineteoTorosCheckBox',
    'caballos-montura': 'CaballosMonturaCheckBox',
    'caballos-pretal': 'CaballosPretalCheckBox',
    // Agrega más mapeos según sea necesario
  };

  // Marcar los checkboxes según los eventos recibidos
  data.events.forEach(event => {
    const checkboxName = eventCheckboxMapping[event];
    if (checkboxName) {
      const checkbox = form.getCheckBox(checkboxName);
      if (checkbox) {
        checkbox.check();
      }
    }
  });

  memberNameField.setText(data.memberName)
  address.setText(data.address)
  city.setText(data.city)
  state.setText(data.state)
  zip.setText(data.zip)
  telephone.setText(data.telephone)
  month.setText(data.month)
  day.setText(data.day)
  year.setText(data.year)
  fatherName.setText(data.fatherName)
  motherName.setText(data.motherName)

  const currentDate = new Date();
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const shortYear = currentYear.toString().slice(-2);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonthIndex];

  daySign.setText(currentDay)
  monthSign.setText(currentMonthName)
  yearSign.setText(shortYear)
  
  const pdfBytes = await pdfDoc.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const fileName = `${data.memberName.replace(/\s+/g, '')}.MR.${shortYear}.Mexico.pdf`;
  saveAs(blob, fileName);
}
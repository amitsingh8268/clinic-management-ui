export const patientFormConfig = [
  { name: 'firstName', label: 'First Name', type: 'text', validators: ['required'] },
  { name: 'lastName', label: 'Last Name', type: 'text', validators: ['required'] },
  { name: 'email', label: 'Email', type: 'email', validators: ['required', 'email'] },
  { name: 'phone', label: 'Phone Number', type: 'tel', validators: [] },
  { name: 'dob', label: 'Date of Birth', type: 'date', validators: ['required'] },
  { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], validators: ['required'] },
  { name: 'address', label: 'Address', type: 'textarea', validators: [] }
];

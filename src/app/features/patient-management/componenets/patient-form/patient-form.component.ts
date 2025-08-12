import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
 // Define the metadata for the patient registration form fields
  patientFormMetadata: any[] = [
    {
      key: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter patient first name',
      validators: [Validators.required, Validators.minLength(2)]
    },
    {
      key: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter patient last name',
      validators: [Validators.required, Validators.minLength(2)]
    },
    {
      key: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      placeholder: 'Select patient date of birth',
      validators: [Validators.required]
    },
    {
      key: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { value: 'male', viewValue: 'Male' },
        { value: 'female', viewValue: 'Female' },
        { value: 'other', viewValue: 'Other' }
      ],
      validators: [Validators.required]
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter patient email',
      validators: [Validators.email]
    },
    {
      key: 'phone',
      label: 'Phone Number',
      type: 'text', // Using text for phone to allow various formats, could use pattern validator
      placeholder: 'e.g., +1 (123) 456-7890',
      validators: [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)] // Basic phone pattern
    },
    {
      key: 'bloodGroup',
      label: 'Blood Group',
      type: 'select',
      options: [
        { value: 'A+', viewValue: 'A+' },
        { value: 'A-', viewValue: 'A-' },
        { value: 'B+', viewValue: 'B+' },
        { value: 'B-', viewValue: 'B-' },
        { value: 'AB+', viewValue: 'AB+' },
        { value: 'AB-', viewValue: 'AB-' },
        { value: 'O+', viewValue: 'O+' },
        { value: 'O-', viewValue: 'O-' }
      ],
      placeholder: 'Select blood group'
    },
    {
      key: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Enter patient address',
      validators: [Validators.required]
    },
    {
      key: 'emergencyContactName',
      label: 'Emergency Contact Name',
      type: 'text',
      placeholder: 'Enter emergency contact name',
      validators: [Validators.required]
    },
    {
      key: 'emergencyContactPhone',
      label: 'Emergency Contact Phone',
      type: 'text',
      placeholder: 'Enter emergency contact phone',
      validators: [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]
    }
  ];

  // The FormGroup that will hold all the form controls
  patientForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.patientForm = this.createFormGroup();
  }

  /**
   * Dynamically creates a FormGroup based on the `patientFormMetadata`.
   * Each field in the metadata becomes a FormControl with its defined validators.
   * @returns FormGroup The dynamically created form group.
   */
  private createFormGroup(): FormGroup {
    const group: { [key: string]: FormControl } = {};
    this.patientFormMetadata.forEach(field => {
      group[field.key] = new FormControl('', field.validators);
    });
    return new FormGroup(group);
  }

  /**
   * Handles the form submission.
   * Logs the form value if valid, otherwise marks all fields as touched to show errors.
   */
  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log('Patient Form Submitted Successfully!', this.patientForm.value);
      // Here you would typically send the data to a backend service
      // this.patientService.addPatient(this.patientForm.value).subscribe(...);
      this.patientForm.reset(); // Reset the form after successful submission
      // Optionally, show a success message to the user
    } else {
      console.log('Form is invalid. Please check the fields.');
      // Mark all controls as touched to display validation errors
      this.patientForm.markAllAsTouched();
    }
  }

  /**
   * Resets the form to its initial state.
   */
  onReset(): void {
    this.patientForm.reset();
  }

  /**
   * Helper function to get a FormControl by its key.
   * Useful for accessing individual controls in the template for validation.
   * @param key The key of the form control.
   * @returns FormControl | null The form control or null if not found.
   */
  getControl(key: string): FormControl {
    return this.patientForm.get(key) as FormControl;
  }
}

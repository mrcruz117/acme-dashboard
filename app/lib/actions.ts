'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  const rawFormData2 = Object.fromEntries(formData.entries());
  // Test it out:
  console.log(rawFormData);
  console.log(rawFormData2);
}

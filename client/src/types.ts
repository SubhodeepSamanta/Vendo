import z from "zod";

export type ProductType={
    id: string|number,
    name: string,
    shortDescription:string,
    description:string,
    price:number,
    sizes: string[],
    colors:string[],
    images: Record<string,string>
}

export type ProductsTypes= ProductType[];

export type CartItemType= ProductType &{
    quantity: number,
    selectedSize: string,
    selectedColor: string,
}

export type CartItemsType= CartItemType[];

export const shippingDetailsSchema= z.object({
    name: z.string().min(1,"Name is Required."),
    email: z.email().min(1,"Email is Required."),
    phone: z.string().min(7,"Phone is Required.").max(10,"Phone is Required.").regex(/^\d+$/,'Phone number can only be numbers.'),
    address: z.string().min(1,"Address is Required."),
    city: z.string().min(1,"City is Required."),
})

export type shippingDetailsInputs= z.infer<typeof shippingDetailsSchema>;

export const paymentFormSchema= z.object({
    cardHolder: z.string().min(1,"Card Holder is Required."),
    cardNumber: z.email().min(16,"Card Number is Required.").min(16,"Card Number is Required."),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,'Expiration date must be in MM/YY format!'),
    cvv: z.string().min(3,"CVV is Required.").max(3,"CVV is Required."),
})

export type paymentFormInputs= z.infer<typeof paymentFormSchema>;
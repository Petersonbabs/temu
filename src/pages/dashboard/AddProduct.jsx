import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

// Validation schema
const schema = yup.object().shape({
    name: yup.string().required("Product name is required"),
    price: yup
        .number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().oneOf(["fashion", "gadgets"]).required("Category is required"),
    image: yup
        .mixed()
        .required("Image is required")
        .test("fileType", "Only image files are allowed", (value) => {
            return value && value.length > 0 && value[0] && value[0].type.startsWith("image/");
        }),

});

const formStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa",
};

const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
};

const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
};

const errorStyle = {
    color: "red",
    fontSize: "13px",
    marginBottom: "8px",
};

const buttonStyle = {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
};

export default function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [addingProduct, setAddingProduct] = useState(false);
    const baseUrl = import.meta.env.VITE_BASE_URL

    const onSubmit = async (data) => {
        setAddingProduct(true)
        try {
            // Prepare form data
            const formData = new FormData();
            formData.append("name", data.name)
            formData.append("price", data.price)
            formData.append("description", data.description)
            formData.append("category", data.category)
            formData.append("image", data.image[0])
            const res = await fetch(`${baseUrl}/products`, {
                method: "POST",
                body: formData,
                headers: {
                    // "Content-Type": "multipart/form-data",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            const result = await res.json();
            if (!result.success) {
                throw new Error(result.message || "Failed to add product");
            }
            if (res.status === 201) {
                toast.success("Product added successfully!");
                reset();
            }
            console.log("Product added:", result);
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error(error.message || "Failed to add product. Please try again.");
        } finally {
            setAddingProduct(false)
        }
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h2>

            <label style={labelStyle} htmlFor="name">
                Name
            </label>
            <input
                style={inputStyle}
                id="name"
                {...register("name")}
                placeholder="Product name"
            />
            {errors.name && <div style={errorStyle}>{errors.name.message}</div>}

            <label style={labelStyle} htmlFor="price">
                Price
            </label>
            <input
                style={inputStyle}
                id="price"
                type="number"
                step="0.01"
                {...register("price")}
                placeholder="Product price"
            />
            {errors.price && <div style={errorStyle}>{errors.price.message}</div>}

            <label style={labelStyle} htmlFor="description">
                Description
            </label>
            <textarea
                style={{ ...inputStyle, minHeight: "60px" }}
                id="description"
                {...register("description")}
                placeholder="Product description"
            />
            {errors.description && (
                <div style={errorStyle}>{errors.description.message}</div>
            )}

            <label style={labelStyle} htmlFor="category">
                Category
            </label>
            <input
                style={inputStyle}
                id="category"
                {...register("category")}
                placeholder="Product category"
            />
            {errors.category && (
                <div style={errorStyle}>{errors.category.message}</div>
            )}
            <label style={labelStyle} htmlFor="image">
                Product Image
            </label>
            <input
                style={inputStyle}
                id="image"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                // onChange={(e) => {
                //     const file = e.target.files[0];
                //     onInputImage(file)
                // }}
                {...register("image")}
            />
            {errors.image && (
                <div style={errorStyle}>{errors.image.message}</div>
            )}

            <button type="submit" disabled={addingProduct} style={buttonStyle}>
                {addingProduct ? "Adding..." : "Add Product"}
            </button>
        </form>
    );
}
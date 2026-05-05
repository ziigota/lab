"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
    user_name: yup.string().required("Введите имя пользователя"),
    email: yup.string().email("Некорректный email").required("Введите email"),
    age: yup.number().typeError("Введите число").positive().integer().required("Введите возраст"),
    password: yup.string().min(6, "Минимум 6 символов").required("Введите пароль"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Подтвердите пароль"),
});

export default function RegisterPage() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        router.push("/posts");
    };

    return (
        <div style={container}>
            <h2 style={title}>Регистрация</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={input} placeholder="Username" {...register("user_name")} />
                <p style={error}>{errors.user_name?.message}</p>

                <input style={input} placeholder="username@example.com" {...register("email")} />
                <p style={error}>{errors.email?.message}</p>

                <input style={input} placeholder="Age" {...register("age")} />
                <p style={error}>{errors.age?.message}</p>

                <input style={input} type="password" placeholder="Password" {...register("password")} />
                <p style={error}>{errors.password?.message}</p>

                <input style={input} type="password" placeholder="Confirm Password" {...register("confirm_password")} />
                <p style={error}>{errors.confirm_password?.message}</p>

                <button style={button} type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

const container = {
    maxWidth: "420px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#ffffff",
    border: "1px solid #000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
    color: "#000",
};

const title = {
    textAlign: "center" as const,
    marginBottom: "20px",
    color: "#000",
};

const input = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    color: "#000",
    background: "#fff",
};

const error = {
    color: "red",
    fontSize: "12px",
    marginBottom: "10px",
};

const button = {
    width: "100%",
    padding: "10px",
    background: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
};
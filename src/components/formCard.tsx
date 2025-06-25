import { useState } from "react";
import { motion } from 'framer-motion';

type Props = {
    onSubmit: (n: number) => void;
};

export const FormCard: React.FC<Props> = ({ onSubmit }) => {

    const [input, setInput] = useState("");

    const onClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(Number(input));
        setInput("");
    }

    return (
        <form onSubmit={onClick} className="mb-4">
            <div className="mb-6">
                <label className="block text-gray-600 mb-2" htmlFor="numero">
                    Ingrese el número a evaluar
                </label>
                <input
                    id="number"
                    name="number"
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full px-4 py-3 mb-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
            </div>
            <div className="mb-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md"
                >
                    Calcular
                </motion.button>

            </div>

        </form>
    )
}

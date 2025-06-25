import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
};

export const BasicCard: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md"
            >
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">🔢 Calcular N</h2>


                {children}
            </motion.div>

        </div>
    )
}

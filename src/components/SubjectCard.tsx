import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaAtom, FaBook, FaBrain, FaCode, FaGlobeAmericas, FaHistory, FaLanguage, FaMicroscope, FaUsers } from "react-icons/fa";
import { MdScience, MdSettingsAccessibility } from "react-icons/md";
import { SiCplusplus, SiTradewidget } from "react-icons/si";

const subjectIcons: Record<string, IconType> = {
  "Logic": FaBrain,
  "Psychology": FaBrain,
  "Geography": FaGlobeAmericas,
  "Anthropology": FaUsers,
  "History": FaHistory,
  "Economics": FaBook,
  "English Skill 1": FaLanguage,
  "English Skill 2": FaLanguage,
  "Interpretation": FaBook,
  "C++": SiCplusplus,
  "Organic Chemistry": FaMicroscope,
  "Inclusive": MdSettingsAccessibility,
  "Global Trade": SiTradewidget,
  "Physics": FaAtom,
  "Emerging Technologies": MdScience
};

const subjectColors: Record<string, string> = {
  "Logic": "bg-purple-100 text-purple-800",
  "Psychology": "bg-indigo-100 text-indigo-800",
  "Geography": "bg-blue-100 text-blue-800",
  "Anthropology": "bg-teal-100 text-teal-800",
  "History": "bg-amber-100 text-amber-800",
  "Economics": "bg-green-100 text-green-800",
  "English Skill 1": "bg-red-100 text-red-800",
  "English Skill 2": "bg-pink-100 text-pink-800",
  "Interpretation": "bg-orange-100 text-orange-800",
  "C++": "bg-blue-100 text-blue-800",
  "Organic Chemistry": "bg-emerald-100 text-emerald-800",
  "Inclusive": "bg-cyan-100 text-cyan-800",
  "Global Trade": "bg-yellow-100 text-yellow-800",
  "Physics": "bg-violet-100 text-violet-800",
  "Emerging Technologies": "bg-fuchsia-100 text-fuchsia-800"
};

interface SubjectCardProps {
  subject: string;
  onClick: () => void;
  disabled?: boolean;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick, disabled }) => {
  const Icon = subjectIcons[subject] || FaBook;
  const colorClass = subjectColors[subject] || "bg-gray-100 text-gray-800";
  
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={!disabled ? onClick : undefined}
      className={`flex flex-col items-center p-6 rounded-xl shadow-md cursor-pointer transition-all ${
        colorClass
      } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`}
    >
      <Icon className="w-10 h-10 mb-3" />
      <h3 className="text-lg font-semibold text-center">{subject}</h3>
      {disabled && (
        <span className="mt-2 text-xs bg-white/50 px-2 py-1 rounded-full">
          Coming Soon
        </span>
      )}
    </motion.div>
  );
};
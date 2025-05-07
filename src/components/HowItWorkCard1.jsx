
const Card = ({ icon, title, description, darkMode, shape }) => {
    return (
        <div className="flex w-full flex-col items-center transition-transform duration-300 hover:scale-105">
            <div className={`flex items-center justify-center h-16 w-16 rounded-${shape} bg-blue-100 text-blue-600 mb-6`}>
                {icon}
            </div>
            <h3 className="text-lg font-medium mb-2 text-center">
                {title}
            </h3>
            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
            </p>
        </div>
    )
}

export default Card

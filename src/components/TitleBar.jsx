function TitleBar(props) {
    return (
        <header className="bg-white">
            <div className="mx-auto h-16 pt-4 gap-8 px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg font-bold italic text-black">
                    {props.title}
                </h3>
                {props.subtitle && ( // 如果 subtitle 存在，则显示
                    <p className="text-center text-sm text-gray-600 mt-1">
                        {props.subtitle}
                    </p>
                )}
            </div>
        </header>
    )
}

export default TitleBar
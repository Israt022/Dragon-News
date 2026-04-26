
const LoadingPage = () => {
    return (
        <div className='flex flex-wrap gap-2 h-[85vh] items-center justify-center'>
            <p>Global Loading</p>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    );
};

export default LoadingPage;
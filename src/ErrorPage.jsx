/* eslint-disable jsx-a11y/iframe-has-title */
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const handlePage = () => {
        navigate(-1);
    };

    return (
        <div id="error-page" className="h-screen w-full flex justify-center items-center space-y-4 flex-col">
            <iframe src="https://embed.lottiefiles.com/animation/82815" className="h-[400px] w-[500px] rounded" />
            <h1 className="text-4xl font-semibold text-orange-400">Oops!,Kire mama ei page, eta to nai..ager page ja</h1>
            <p className="text-xl font-bold text-red-500">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <button type="button" className="px-4 py-2 rounded-md bg-red-500 text-white w-1/2 font-bold" onClick={handlePage}>
                Go Back to Previous Page!!
            </button>
        </div>
    );
}

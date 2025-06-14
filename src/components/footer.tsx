export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 px-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} My Blog. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
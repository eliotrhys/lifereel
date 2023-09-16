"use client";

import { useEffect } from "react";


export default function Home() {

    // const router = useRouter();

    useEffect(() => {
        // Perform the redirection when the component mounts
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd1Bdgictneejhf8bYU6SS50WtMag-9hUbOiTiWujNqUqSKJg/viewform';
    }, []);

    return null; // This component doesn't render anything
}

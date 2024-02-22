import { getSession, logout } from '@/lib';
import { redirect } from 'next/navigation';
import React from 'react'

const PrivatePage = async () => {
    const session = await getSession();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <div>
            <form
                action={async () => {
                    "use server";
                    await logout();
                    redirect("/");
                }}
            >
                <button type="submit">Logout</button>
            </form>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default PrivatePage
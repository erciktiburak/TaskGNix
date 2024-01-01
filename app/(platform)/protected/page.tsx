"use client";

import { UserButton } from "@clerk/nextjs";

const ProductedPage = async () => {
    
    return (
        <div>
            <UserButton 
            afterSignOutUrl="/"
            />
        </div>
    )
}

export default ProductedPage;
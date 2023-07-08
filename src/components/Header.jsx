import React from "react";

function Header({ money, total }) {
    return (
        <div className="header">
            {total === 0 && (<div>You have ${money}.</div>)}
            {total > 0 && money - total !== 0 && (<div>You have ${money - total} left.</div>)}
            {money - total === 0 && (<div>You are broke now.</div>)}
            <style>
                {`
                .header {
                    position: sticky;
                    top: 0;
                    background-color: #333;
                    color: #fff;
                    padding: 17px;
                    font-size: 1.5rem;
                  }
                `}
            </style>
        </div>
    )
}

export default Header
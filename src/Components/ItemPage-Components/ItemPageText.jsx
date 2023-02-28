import "./ItemPageText.css";
import SizeBlock from "./SizeBlock";
import { useState } from "react";

const sizes = [
    { size: "EU 36", id: 1 },
    { size: "EU 37", id: 2 },
    { size: "EU 38", id: 3 },
    { size: "EU 39", id: 4 },
    { size: "EU 40", id: 5 },
    { size: "EU 41", id: 6 },
    { size: "EU 42", id: 7 },
    { size: "EU 43", id: 8 },
    { size: "EU 44", id: 9 },
    { size: "EU 45", id: 10 },
]

function ItemPageText() {




    let sizeTable = sizes.map(size => {
        return <SizeBlock
            key={size.id}
            id={size.id}
            size={size.size}

        />
    })
    return (
        <div className="ItemPageText">
            <div className="ItemPageText-title-box">
                <div className="ItemPageText-title-price">
                    <span className="ItemPageText-model">JORDAN 1 ROGUE </span>
                    <span className="ItemPageText-price">$189.90</span>
                </div>
                <div className="ItemPageText-name-palette">
                    <span className="ItemPageText-name">Sin of Lust</span>
                    <div className="ItemPageText-palette">
                        <div style={{ backgroundColor: "white" }} className="ItemPageText-palette-color"></div>
                        <div style={{ backgroundColor: "brown" }} className="ItemPageText-palette-color"></div>
                        <div style={{ backgroundColor: "black" }} className="ItemPageText-palette-color"></div>
                    </div>
                </div>
                <span className="ItemPageText-price price-mobile-vers">$189.90</span>
            </div>

            <div className="ItemPageText-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui omnis accusantium rem ducimus! Ipsa maxime mollitia possimus veniam recusandae nisi accusamus iure expedita hic cupiditate? Fugit aliquam beatae commodi!
                    Quidem similique quibusdam vitae dolorum at explicabo, nostrum, consequatur vero, temporibus quisquam nam recusandae expedita animi beatae laudantium necessitatibus eveniet perferendis a rem saepe. Odit nam pariatur distinctio mollitia sequi.
                    Suscipit, tenetur natus hic minima eveniet explicabo odit incidunt ullam sapiente asperiores sint laudantium vero praesentium quidem repellendus ducimus beatae delectus autem ab blanditiis excepturi. Ab sequi debitis molestias facere?
                    Ullam voluptatem aut sit tempora quis quasi at repellat ab et voluptatum veritatis praesentium animi officiis minus, nostrum nihil ducimus in voluptas sint officia, odio ipsa odit dolore! Impedit, adipisci.</p>
            </div>

            <div className="ItemPageText-choose-size-box">
                <span>Please Select a size.</span>
                <div className="ItemPageText-size-table">
                    {sizeTable}
                </div>
                <div className="ItemPageText-btns">

                    <button className="ItemPageText-add-to-wish">ADD TO WHISHLIST <i className="fa-solid fa-star"></i></button>
                    <button className="ItemPageText-add-to-cart">ADD TO CART <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>

        </div>
    )
}

export default ItemPageText;

import { CollectionStyle } from "./CollectionStyle"

const Collection = ({ myRef2, myRef3, myRef4, moveCat2, moveCat3, moveCat4 }: any) => {
    return (
        <CollectionStyle>
            <div className="row">
                <div style={{ transform: `translateX(-${moveCat2 - 2000}px)` }} ref={myRef2} className=" col-12">
                    <picture>
                        <img src="./images/collection-1.webp" alt="collection-1" />
                    </picture>
                </div>
                <div style={{ transform: `translateX(${moveCat3-1000}px)` }} ref={myRef3} className="col-12 my-3">
                    <picture>
                        <img className="card2" src="./images/collection-2.webp" alt="collection-2" />
                    </picture>
                </div>
                <div style={{ transform: `translateX(-${moveCat4 - 2000}px)` }} ref={myRef4} className="col-12">
                    <picture>
                        <img src="./images/collection-3.webp" alt="collection-3" />
                    </picture>
                </div>
            </div>
        </CollectionStyle>
    )
}
export default Collection
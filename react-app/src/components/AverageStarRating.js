export default function AverageStarRating({ reviewAverage }) {
    const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>
    const halfStar = <i className="fa fa-star-half-o" aria-hidden="true"></i>
    const fullStar = <i className="fa fa-star" aria-hidden="true"></i>

    return (
        <>
            <div className="five-star-container">
                <div className="average-star-container">
                    {(() => {
                        switch (true) {
                            case (reviewAverage < 0.9): return halfStar;
                            case (reviewAverage >= 1): return fullStar;
                            default: return emptyStar;
                        }
                    })()}
                </div>
                <div className="average-star-container">
                    {(() => {
                        switch (true) {
                            case (reviewAverage <= 1): return emptyStar
                            case (reviewAverage > 1.1 && reviewAverage < 1.9): return halfStar;
                            case (reviewAverage >= 2): return fullStar;
                            default: return emptyStar;
                        }
                    })()}
                </div>
                <div className="average-star-container">
                    {(() => {
                        switch (true) {
                            case (reviewAverage <= 2): return emptyStar
                            case (reviewAverage > 2.1 && reviewAverage < 2.9): return halfStar;
                            case (reviewAverage >= 3): return fullStar;
                            default: return emptyStar;
                        }
                    })()}
                </div>
                <div className="average-star-container">
                    {(() => {
                        switch (true) {
                            case (reviewAverage <= 3): return emptyStar
                            case (reviewAverage > 3.1 && reviewAverage < 3.9): return halfStar;
                            case (reviewAverage >= 4): return fullStar;
                            default: return emptyStar;
                        }
                    })()}
                </div>
                <div className="average-star-container">
                    {(() => {
                        switch (true) {
                            case (reviewAverage < 4): return emptyStar
                            case (reviewAverage > 4.1 && reviewAverage < 4.9): return halfStar;
                            // case (reviewAverage < 4.7): return fullStar;
                            case (reviewAverage >= 5): return fullStar;
                            default: return emptyStar;
                        }
                    })()}
                </div>
            </div></>
    )
}

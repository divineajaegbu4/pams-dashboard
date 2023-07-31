import React from "react";

type Loader = {
    colSpan: number
}

export const SkelentonLoader: React.FC<Loader> = ({ colSpan }) => {
    return (
        <tr className="js-table-row-loader">
            <td colSpan={colSpan} className="table-cell-loader">
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
                <hr></hr>
                <div className="row-loader u-flex">
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-hide-small--flex"></div>
                    <div className="u-flex__cell u-mg--sm u-pd--sm loading-animation u-show-large-only--flex"></div>
                </div>
            </td>
        </tr>
    );
};


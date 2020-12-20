'use strict';

const loading = elem => {
    if (elem) { elem.querySelector('.loding-spinner').remove(); }
    else return `
        <div class="loding-spinner">
            <div class="loadingio-spinner-spinner-mljfgfh12q">
                <div class="ldio-47szf1rv5j6">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    `;
}

export default loading;
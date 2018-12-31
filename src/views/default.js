'use strict';

module.exports = (res) => {

    return {

        title: res.locals.title,
        content: res.locals.content,
        helpers: {

            echoNav: () => {

                let links = '';

                res.locals.routes.forEach((route, i) => {

                    let _class = '';

                    if (res.locals.path === route.path) _class = 'active';
                    links += `<li class="nav-item ${_class}">`;
                    links += `<a class="nav-link" href="${route.path}" title="${route.title}">${route.title}</a>`;
                    links += '</li>';
                });
                return links;
            }
        }
    }
};
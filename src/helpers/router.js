import Router from 'next/router'

export const goTo = (path) => {
    Router.push(path);
}
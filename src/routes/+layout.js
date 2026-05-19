export function load({ url, data }) {
    return {
        ...data,  // includes projects from +layout.server.js
        url: url.pathname,
    };
}

export const prerender = true;
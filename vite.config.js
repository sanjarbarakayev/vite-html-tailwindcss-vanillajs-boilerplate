import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// import { dependencies } from './package.json';
// function renderChunks(deps) { // https://vitejs.dev/config/
//     let chunks = {};
//     Object.keys(deps).forEach((key) => {
//         if (['@fortawesome/fontawesome-free'].includes(key)) return;
//         chunks[key] = [key];
//     });
//     return chunks;
// }

export default {
    plugins: [
        ViteWebfontDownload([
            'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700&display=swap',
        ]),
    ],
    optimizeDeps: {
        exclude: ['@fortawesome/fontawesome-free'],
    },
    // build: {
    //     // sourcemap: false,
    //     rollupOptions: {
    //         output: {
    //             manualChunks: {
    //                 vendor: ['@fortawesome/fontawesome-free'],
    //                 ...renderChunks(dependencies),
    //             },
    //         },
    //     },
    // },
};

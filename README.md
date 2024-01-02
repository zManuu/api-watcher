# website-template

A small website template using the following packages and libraries:
- [Vite](https://vitejs.dev/) (Build system)
- [Vue3](https://vuejs.org/) (JavaScript framework)
- [TailwindCSS](https://tailwindcss.com/) (Style system)
- [Fontawesome](https://fontawesome.com/) (Icon library)

## NPM scripts
```dev``` - starts a development-server so the website can be previewed in the browser with hot reload  
```build``` - builds a production ready version

## Usage

### Icons

There is 2 ways to add icons to the website:  
***Fontawesome icons*** - Use the ```fa``` component with the ```icon``` directive like so: ```<fa icon="xxx" />```

### Images

1. Place the image file into the [img folder](public/img/).
2. Use the image in your templates like so: ```<img src="/img/xxx.xxx" />```

## Recommended VSCode plugins

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense
- ESLint
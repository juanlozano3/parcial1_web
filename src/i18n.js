import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "robot_lovers": "Adopt a Robot with Robot Lovers!",
            "robot_list": "Robot List",
            "id": "ID",
            "name": "Name",
            "model": "Model",
            "manufacturer": "Manufacturer",
            "fabrication_year": "Fabrication Year",
            "processing_capacity": "Processing Capacity",
            "humor": "Humor",
            "login": "Login",
            "password": "Password",
            "enter": "Enter",
            "cancel": "Cancel",
            "authentication_error": "Authentication error. Check your credentials."
        }
    },
    es: {
        translation: {
            "robot_lovers": "Adopta un Robot con Robot Lovers!",
            "robot_list": "Lista de Robots",
            "id": "ID",
            "name": "Nombre",
            "model": "Modelo",
            "manufacturer": "Empresa Fabricante",
            "fabrication_year": "Año de Fabricación",
            "processing_capacity": "Capacidad de Procesamiento",
            "humor": "Humor",
            "login": "Usuario",
            "password": "Contraseña",
            "enter": "Ingresar",
            "cancel": "Cancelar",
            "authentication_error": "Error de autenticación. Revise sus credenciales."
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es", 
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;

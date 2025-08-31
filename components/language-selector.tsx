"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

const LanguageContext = createContext<{
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}>({
  language: "es",
  setLanguage: () => {},
  t: (key: string) => key,
})

const translations = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.how-it-works": "How It Works",
    "nav.about": "About",
    "nav.home": "Home",

    // Hero
    "hero.title": "Secure Medical Records on the",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb provides decentralized and encrypted medical record management for healthcare professionals and patients. Your health data, secured by blockchain technology.",
    "hero.cta.doctors": "For Healthcare Professionals",
    "hero.cta.patients": "For Patients",

    // How it works
    "how-it-works.title": "Carry Your Medical Information",
    "how-it-works.subtitle": "Access your medical records securely and elegantly with our QR code wearable devices.",
    "how-it-works.necklaces.title": "Medical Necklaces",
    "how-it-works.necklaces.desc":
      "Elegant golden necklaces with QR codes and medical cross for quick access to emergency information.",
    "how-it-works.design.title": "Elegant Design",
    "how-it-works.design.desc":
      "Discreet and professional design that integrates perfectly with your personal style and medical attire.",
    "how-it-works.bracelets.title": "Smart Bracelets",
    "how-it-works.bracelets.desc":
      "Bracelets with circular QR codes for comfortable and secure access to your medical data 24/7.",

    // Features
    "features.title": "Why choose HealthWeb?",
    "features.subtitle":
      "Built with cutting-edge blockchain technology to ensure your medical data is secure, private and accessible when you need it.",
    "features.secure.title": "Secure and Encrypted",
    "features.secure.desc":
      "Your medical records are encrypted and securely stored on the blockchain, ensuring only authorized access.",
    "features.qr.title": "QR Code Access",
    "features.qr.desc":
      "Quick and secure access to medical records through QR codes for emergency situations and consultations.",
    "features.control.title": "Patient Control",
    "features.control.desc":
      "Patients maintain full control over their medical data, deciding who can access their information.",
    "features.tech.title": "Advanced Medical Technology",
    "features.tech.desc":
      "Seamless integration with existing medical systems, allowing healthcare professionals to access and update patient information securely and efficiently.",
    "features.tech.compatibility": "Hospital system compatibility",
    "features.tech.mobile": "Mobile access for professionals",
    "features.tech.sync": "Real-time synchronization",

    // Footer
    "footer.description": "Decentralized medical record management powered by blockchain technology.",
    "footer.developed": "Developed by",
    "footer.powered": "Powered By",
    "footer.contact": "Contact:",

    // Doctor page
    "doctor.title": "Medical Professional Portal",
    "doctor.subtitle": "Access and manage patient medical records securely",
    "doctor.scanner.title": "QR Code Scanner",
    "doctor.scanner.subtitle": "Scan patient QR codes to access medical records",
    "doctor.scanner.button": "Start Scanner",
    "doctor.records.title": "Recent Medical Records",
    "doctor.documents.title": "Document Analysis Center",
    "doctor.documents.subtitle": "Advanced tools for medical document processing and analysis",
    "doctor.documents.pdf.title": "PDF Analysis",
    "doctor.documents.pdf.desc": "Intelligent analysis of medical reports and documents",
    "doctor.documents.history.title": "Medical History",
    "doctor.documents.history.desc": "Complete patient medical history timeline",
    "doctor.documents.xray.title": "X-Ray Analysis",
    "doctor.documents.xray.desc": "AI-powered radiological image analysis",

    // Patient page
    "patient.title": "Patient Portal",
    "patient.subtitle": "Manage your medical information securely",
    "patient.info.title": "Medical Information",
    "patient.qr.title": "Your QR Code",
    "patient.qr.subtitle": "Share this code with healthcare professionals",
    "patient.files.title": "Upload Medical Files",
    "patient.files.subtitle": "Securely store your medical documents",
    "patient.nearby.title": "Nearby Medical Centers",
    "patient.nearby.subtitle": "Find healthcare facilities near you",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.upload": "Upload",
    "common.download": "Download",
  },
  es: {
    // Header
    "nav.features": "Características",
    "nav.how-it-works": "Cómo Funciona",
    "nav.about": "Acerca de",
    "nav.home": "Inicio",

    // Hero
    "hero.title": "Registros Médicos Seguros en la",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb proporciona gestión descentralizada y encriptada de registros médicos para profesionales de la salud y pacientes. Tus datos de salud, asegurados por tecnología blockchain.",
    "hero.cta.doctors": "Para Profesionales de Salud",
    "hero.cta.patients": "Para Pacientes",

    // How it works
    "how-it-works.title": "Porta tu Información Médica",
    "how-it-works.subtitle":
      "Accede a tus registros médicos de forma segura y elegante con nuestros dispositivos portátiles con códigos QR.",
    "how-it-works.necklaces.title": "Collares Médicos",
    "how-it-works.necklaces.desc":
      "Elegantes collares dorados con códigos QR y cruz médica para acceso rápido a información de emergencia.",
    "how-it-works.design.title": "Diseño Elegante",
    "how-it-works.design.desc":
      "Diseño discreto y profesional que se integra perfectamente con tu estilo personal y vestimenta médica.",
    "how-it-works.bracelets.title": "Pulseras Inteligentes",
    "how-it-works.bracelets.desc":
      "Pulseras con códigos QR circulares para un acceso cómodo y seguro a tus datos médicos las 24 horas.",

    // Features
    "features.title": "¿Por qué elegir HealthWeb?",
    "features.subtitle":
      "Construido con tecnología blockchain de vanguardia para garantizar que tus datos médicos sean seguros, privados y accesibles cuando los necesites.",
    "features.secure.title": "Seguro y Encriptado",
    "features.secure.desc":
      "Tus registros médicos están encriptados y almacenados de forma segura en la blockchain, garantizando solo acceso autorizado.",
    "features.qr.title": "Acceso por Código QR",
    "features.qr.desc":
      "Acceso rápido y seguro a registros médicos a través de códigos QR para situaciones de emergencia y consultas.",
    "features.control.title": "Control del Paciente",
    "features.control.desc":
      "Los pacientes mantienen control total sobre sus datos médicos, decidiendo quién puede acceder a su información.",
    "features.tech.title": "Tecnología Médica Avanzada",
    "features.tech.desc":
      "Integración perfecta con sistemas médicos existentes, permitiendo a los profesionales de la salud acceder y actualizar información de pacientes de forma segura y eficiente.",
    "features.tech.compatibility": "Compatibilidad con sistemas hospitalarios",
    "features.tech.mobile": "Acceso móvil para profesionales",
    "features.tech.sync": "Sincronización en tiempo real",

    // Footer
    "footer.description": "Gestión descentralizada de registros médicos impulsada por tecnología blockchain.",
    "footer.developed": "Desarrollado por",
    "footer.powered": "Impulsado Por",
    "footer.contact": "Contacto:",

    // Doctor page
    "doctor.title": "Portal Profesional Médico",
    "doctor.subtitle": "Accede y gestiona registros médicos de pacientes de forma segura",
    "doctor.scanner.title": "Escáner de Código QR",
    "doctor.scanner.subtitle": "Escanea códigos QR de pacientes para acceder a registros médicos",
    "doctor.scanner.button": "Iniciar Escáner",
    "doctor.records.title": "Registros Médicos Recientes",
    "doctor.documents.title": "Centro de Análisis de Documentos",
    "doctor.documents.subtitle": "Herramientas avanzadas para procesamiento y análisis de documentos médicos",
    "doctor.documents.pdf.title": "Análisis de PDF",
    "doctor.documents.pdf.desc": "Análisis inteligente de reportes y documentos médicos",
    "doctor.documents.history.title": "Historial Médico",
    "doctor.documents.history.desc": "Línea de tiempo completa del historial médico del paciente",
    "doctor.documents.xray.title": "Análisis de Rayos X",
    "doctor.documents.xray.desc": "Análisis de imágenes radiológicas con IA",

    // Patient page
    "patient.title": "Portal del Paciente",
    "patient.subtitle": "Gestiona tu información médica de forma segura",
    "patient.info.title": "Información Médica",
    "patient.qr.title": "Tu Código QR",
    "patient.qr.subtitle": "Comparte este código con profesionales de la salud",
    "patient.files.title": "Subir Archivos Médicos",
    "patient.files.subtitle": "Almacena tus documentos médicos de forma segura",
    "patient.nearby.title": "Centros Médicos Cercanos",
    "patient.nearby.subtitle": "Encuentra centros de salud cerca de ti",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.upload": "Subir",
    "common.download": "Descargar",
  },
  fr: {
    // Header
    "nav.features": "Fonctionnalités",
    "nav.how-it-works": "Comment ça marche",
    "nav.about": "À propos",
    "nav.home": "Accueil",

    // Hero
    "hero.title": "Dossiers Médicaux Sécurisés sur la",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb fournit une gestion décentralisée et cryptée des dossiers médicaux pour les professionnels de santé et les patients. Vos données de santé, sécurisées par la technologie blockchain.",
    "hero.cta.doctors": "Pour les Professionnels de Santé",
    "hero.cta.patients": "Pour les Patients",

    // How it works
    "how-it-works.title": "Portez vos Informations Médicales",
    "how-it-works.subtitle":
      "Accédez à vos dossiers médicaux de manière sécurisée et élégante avec nos dispositifs portables à codes QR.",
    "how-it-works.necklaces.title": "Colliers Médicaux",
    "how-it-works.necklaces.desc":
      "Élégants colliers dorés avec codes QR et croix médicale pour un accès rapide aux informations d'urgence.",
    "how-it-works.design.title": "Design Élégant",
    "how-it-works.design.desc":
      "Design discret et professionnel qui s'intègre parfaitement à votre style personnel et à votre tenue médicale.",
    "how-it-works.bracelets.title": "Bracelets Intelligents",
    "how-it-works.bracelets.desc":
      "Bracelets avec codes QR circulaires pour un accès confortable et sécurisé à vos données médicales 24h/24.",

    // Features
    "features.title": "Pourquoi choisir HealthWeb?",
    "features.subtitle":
      "Construit avec une technologie blockchain de pointe pour garantir que vos données médicales soient sécurisées, privées et accessibles quand vous en avez besoin.",
    "features.secure.title": "Sécurisé et Crypté",
    "features.secure.desc":
      "Vos dossiers médicaux sont cryptés et stockés en toute sécurité sur la blockchain, garantissant un accès autorisé uniquement.",
    "features.qr.title": "Accès par Code QR",
    "features.qr.desc":
      "Accès rapide et sécurisé aux dossiers médicaux via des codes QR pour les situations d'urgence et les consultations.",
    "features.control.title": "Contrôle du Patient",
    "features.control.desc":
      "Les patients gardent un contrôle total sur leurs données médicales, décidant qui peut accéder à leurs informations.",
    "features.tech.title": "Technologie Médicale Avancée",
    "features.tech.desc":
      "Intégration parfaite avec les systèmes médicaux existants, permettant aux professionnels de santé d'accéder et de mettre à jour les informations des patients de manière sécurisée et efficace.",
    "features.tech.compatibility": "Compatibilité avec les systèmes hospitaliers",
    "features.tech.mobile": "Accès mobile pour les professionnels",
    "features.tech.sync": "Synchronisation en temps réel",

    // Footer
    "footer.description": "Gestion décentralisée des dossiers médicaux alimentée par la technologie blockchain.",
    "footer.developed": "Développé par",
    "footer.powered": "Alimenté par",
    "footer.contact": "Contact:",

    // Doctor page
    "doctor.title": "Portail Professionnel Médical",
    "doctor.subtitle": "Accédez et gérez les dossiers médicaux des patients en toute sécurité",
    "doctor.scanner.title": "Scanner de Code QR",
    "doctor.scanner.subtitle": "Scannez les codes QR des patients pour accéder aux dossiers médicaux",
    "doctor.scanner.button": "Démarrer le Scanner",
    "doctor.records.title": "Dossiers Médicaux Récents",
    "doctor.documents.title": "Centre d'Analyse de Documents",
    "doctor.documents.subtitle": "Outils avancés pour le traitement et l'analyse de documents médicaux",
    "doctor.documents.pdf.title": "Analyse PDF",
    "doctor.documents.pdf.desc": "Analyse intelligente des rapports et documents médicaux",
    "doctor.documents.history.title": "Historique Médical",
    "doctor.documents.history.desc": "Chronologie complète de l'historique médical du patient",
    "doctor.documents.xray.title": "Analyse de Rayons X",
    "doctor.documents.xray.desc": "Analyse d'images radiologiques alimentée par l'IA",

    // Patient page
    "patient.title": "Portail Patient",
    "patient.subtitle": "Gérez vos informations médicales en toute sécurité",
    "patient.info.title": "Informations Médicales",
    "patient.qr.title": "Votre Code QR",
    "patient.qr.subtitle": "Partagez ce code avec les professionnels de santé",
    "patient.files.title": "Télécharger des Fichiers Médicaux",
    "patient.files.subtitle": "Stockez vos documents médicaux en toute sécurité",
    "patient.nearby.title": "Centres Médicaux Proches",
    "patient.nearby.subtitle": "Trouvez des établissements de santé près de chez vous",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Erreur",
    "common.success": "Succès",
    "common.cancel": "Annuler",
    "common.save": "Sauvegarder",
    "common.upload": "Télécharger",
    "common.download": "Télécharger",
  },
  de: {
    // Header
    "nav.features": "Funktionen",
    "nav.how-it-works": "Wie es funktioniert",
    "nav.about": "Über uns",
    "nav.home": "Startseite",

    // Hero
    "hero.title": "Sichere Medizinische Aufzeichnungen auf der",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb bietet dezentrale und verschlüsselte Verwaltung medizinischer Aufzeichnungen für Gesundheitsfachkräfte und Patienten. Ihre Gesundheitsdaten, gesichert durch Blockchain-Technologie.",
    "hero.cta.doctors": "Für Gesundheitsfachkräfte",
    "hero.cta.patients": "Für Patienten",

    // How it works
    "how-it-works.title": "Tragen Sie Ihre Medizinischen Informationen",
    "how-it-works.subtitle":
      "Greifen Sie sicher und elegant auf Ihre medizinischen Aufzeichnungen mit unseren tragbaren QR-Code-Geräten zu.",
    "how-it-works.necklaces.title": "Medizinische Halsketten",
    "how-it-works.necklaces.desc":
      "Elegante goldene Halsketten mit QR-Codes und medizinischem Kreuz für schnellen Zugang zu Notfallinformationen.",
    "how-it-works.design.title": "Elegantes Design",
    "how-it-works.design.desc":
      "Diskretes und professionelles Design, das sich perfekt in Ihren persönlichen Stil und Ihre medizinische Kleidung integriert.",
    "how-it-works.bracelets.title": "Intelligente Armbänder",
    "how-it-works.bracelets.desc":
      "Armbänder mit kreisförmigen QR-Codes für bequemen und sicheren Zugang zu Ihren medizinischen Daten rund um die Uhr.",

    // Features
    "features.title": "Warum HealthWeb wählen?",
    "features.subtitle":
      "Gebaut mit modernster Blockchain-Technologie, um sicherzustellen, dass Ihre medizinischen Daten sicher, privat und zugänglich sind, wenn Sie sie benötigen.",
    "features.secure.title": "Sicher und Verschlüsselt",
    "features.secure.desc":
      "Ihre medizinischen Aufzeichnungen sind verschlüsselt und sicher auf der Blockchain gespeichert, wodurch nur autorisierter Zugang gewährleistet wird.",
    "features.qr.title": "QR-Code-Zugang",
    "features.qr.desc":
      "Schneller und sicherer Zugang zu medizinischen Aufzeichnungen über QR-Codes für Notfallsituationen und Konsultationen.",
    "features.control.title": "Patientenkontrolle",
    "features.control.desc":
      "Patienten behalten die volle Kontrolle über ihre medizinischen Daten und entscheiden, wer auf ihre Informationen zugreifen kann.",
    "features.tech.title": "Fortschrittliche Medizintechnik",
    "features.tech.desc":
      "Nahtlose Integration mit bestehenden medizinischen Systemen, die es Gesundheitsfachkräften ermöglicht, Patienteninformationen sicher und effizient zu verwalten und zu aktualisieren.",
    "features.tech.compatibility": "Kompatibilität mit Krankenhaussystemen",
    "features.tech.mobile": "Mobiler Zugang für Fachkräfte",
    "features.tech.sync": "Echtzeit-Synchronisation",

    // Footer
    "footer.description": "Dezentrale Verwaltung medizinischer Aufzeichnungen, angetrieben von Blockchain-Technologie.",
    "footer.developed": "Entwickelt von",
    "footer.powered": "Angetrieben von",
    "footer.contact": "Kontakt:",

    // Doctor page
    "doctor.title": "Medizinisches Fachportal",
    "doctor.subtitle": "Greifen Sie sicher auf medizinische Patientenaufzeichnungen zu und verwalten Sie diese",
    "doctor.scanner.title": "QR-Code-Scanner",
    "doctor.scanner.subtitle": "Scannen Sie Patienten-QR-Codes, um auf medizinische Aufzeichnungen zuzugreifen",
    "doctor.scanner.button": "Scanner starten",
    "doctor.records.title": "Aktuelle Medizinische Aufzeichnungen",
    "doctor.documents.title": "Dokumentenanalysezentrum",
    "doctor.documents.subtitle": "Erweiterte Tools für die Verarbeitung und Analyse medizinischer Dokumente",
    "doctor.documents.pdf.title": "PDF-Analyse",
    "doctor.documents.pdf.desc": "Intelligente Analyse medizinischer Berichte und Dokumente",
    "doctor.documents.history.title": "Medizinische Geschichte",
    "doctor.documents.history.desc": "Vollständige Zeitleiste der medizinischen Patientengeschichte",
    "doctor.documents.xray.title": "Röntgenanalyse",
    "doctor.documents.xray.desc": "KI-gestützte radiologische Bildanalyse",

    // Patient page
    "patient.title": "Patientenportal",
    "patient.subtitle": "Verwalten Sie Ihre medizinischen Informationen sicher",
    "patient.info.title": "Medizinische Informationen",
    "patient.qr.title": "Ihr QR-Code",
    "patient.qr.subtitle": "Teilen Sie diesen Code mit Gesundheitsfachkräften",
    "patient.files.title": "Medizinische Dateien hochladen",
    "patient.files.subtitle": "Speichern Sie Ihre medizinischen Dokumente sicher",
    "patient.nearby.title": "Nahegelegene Medizinische Zentren",
    "patient.nearby.subtitle": "Finden Sie Gesundheitseinrichtungen in Ihrer Nähe",

    // Common
    "common.loading": "Laden...",
    "common.error": "Fehler",
    "common.success": "Erfolg",
    "common.cancel": "Abbrechen",
    "common.save": "Speichern",
    "common.upload": "Hochladen",
    "common.download": "Herunterladen",
  },
  it: {
    // Header
    "nav.features": "Caratteristiche",
    "nav.how-it-works": "Come Funziona",
    "nav.about": "Chi Siamo",
    "nav.home": "Home",

    // Hero
    "hero.title": "Cartelle Mediche Sicure sulla",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb fornisce gestione decentralizzata e crittografata delle cartelle mediche per professionisti sanitari e pazienti. I tuoi dati sanitari, protetti dalla tecnologia blockchain.",
    "hero.cta.doctors": "Per Professionisti Sanitari",
    "hero.cta.patients": "Per Pazienti",

    // How it works
    "how-it-works.title": "Porta le tue Informazioni Mediche",
    "how-it-works.subtitle":
      "Accedi alle tue cartelle mediche in modo sicuro ed elegante con i nostri dispositivi indossabili con codici QR.",
    "how-it-works.necklaces.title": "Collane Mediche",
    "how-it-works.necklaces.desc":
      "Eleganti collane dorate con codici QR e croce medica per accesso rapido alle informazioni di emergenza.",
    "how-it-works.design.title": "Design Elegante",
    "how-it-works.design.desc":
      "Design discreto e professionale che si integra perfettamente con il tuo stile personale e l'abbigliamento medico.",
    "how-it-works.bracelets.title": "Braccialetti Intelligenti",
    "how-it-works.bracelets.desc":
      "Braccialetti con codici QR circolari per accesso comodo e sicuro ai tuoi dati medici 24 ore su 24.",

    // Features
    "features.title": "Perché scegliere HealthWeb?",
    "features.subtitle":
      "Costruito con tecnologia blockchain all'avanguardia per garantire che i tuoi dati medici siano sicuri, privati e accessibili quando ne hai bisogno.",
    "features.secure.title": "Sicuro e Crittografato",
    "features.secure.desc":
      "Le tue cartelle mediche sono crittografate e archiviate in modo sicuro sulla blockchain, garantendo solo accesso autorizzato.",
    "features.qr.title": "Accesso tramite Codice QR",
    "features.qr.desc":
      "Accesso rapido e sicuro alle cartelle mediche tramite codici QR per situazioni di emergenza e consultazioni.",
    "features.control.title": "Controllo del Paziente",
    "features.control.desc":
      "I pazienti mantengono il controllo completo sui loro dati medici, decidendo chi può accedere alle loro informazioni.",
    "features.tech.title": "Tecnologia Medica Avanzata",
    "features.tech.desc":
      "Integrazione perfetta con i sistemi medici esistenti, permettendo ai professionisti sanitari di accedere e aggiornare le informazioni dei pazienti in modo sicuro ed efficiente.",
    "features.tech.compatibility": "Compatibilità con sistemi ospedalieri",
    "features.tech.mobile": "Accesso mobile per professionisti",
    "features.tech.sync": "Sincronizzazione in tempo reale",

    // Footer
    "footer.description": "Gestione decentralizzata delle cartelle mediche alimentata dalla tecnologia blockchain.",
    "footer.developed": "Sviluppato da",
    "footer.powered": "Alimentato da",
    "footer.contact": "Contatto:",

    // Doctor page
    "doctor.title": "Portale Professionale Medico",
    "doctor.subtitle": "Accedi e gestisci le cartelle mediche dei pazienti in modo sicuro",
    "doctor.scanner.title": "Scanner Codice QR",
    "doctor.scanner.subtitle": "Scansiona i codici QR dei pazienti per accedere alle cartelle mediche",
    "doctor.scanner.button": "Avvia Scanner",
    "doctor.records.title": "Cartelle Mediche Recenti",
    "doctor.documents.title": "Centro di Analisi Documenti",
    "doctor.documents.subtitle": "Strumenti avanzati per l'elaborazione e l'analisi di documenti medici",
    "doctor.documents.pdf.title": "Analisi PDF",
    "doctor.documents.pdf.desc": "Analisi intelligente di rapporti e documenti medici",
    "doctor.documents.history.title": "Storia Medica",
    "doctor.documents.history.desc": "Timeline completa della storia medica del paziente",
    "doctor.documents.xray.title": "Analisi Raggi X",
    "doctor.documents.xray.desc": "Analisi di immagini radiologiche alimentata dall'IA",

    // Patient page
    "patient.title": "Portale Paziente",
    "patient.subtitle": "Gestisci le tue informazioni mediche in modo sicuro",
    "patient.info.title": "Informazioni Mediche",
    "patient.qr.title": "Il tuo Codice QR",
    "patient.qr.subtitle": "Condividi questo codice con i professionisti sanitari",
    "patient.files.title": "Carica File Medici",
    "patient.files.subtitle": "Archivia i tuoi documenti medici in modo sicuro",
    "patient.nearby.title": "Centri Medici Vicini",
    "patient.nearby.subtitle": "Trova strutture sanitarie vicino a te",

    // Common
    "common.loading": "Caricamento...",
    "common.error": "Errore",
    "common.success": "Successo",
    "common.cancel": "Annulla",
    "common.save": "Salva",
    "common.upload": "Carica",
    "common.download": "Scarica",
  },
  pt: {
    // Header
    "nav.features": "Características",
    "nav.how-it-works": "Como Funciona",
    "nav.about": "Sobre",
    "nav.home": "Início",

    // Hero
    "hero.title": "Registros Médicos Seguros na",
    "hero.title.blockchain": "Blockchain",
    "hero.subtitle":
      "HealthWeb fornece gestão descentralizada e criptografada de registros médicos para profissionais de saúde e pacientes. Seus dados de saúde, protegidos pela tecnologia blockchain.",
    "hero.cta.doctors": "Para Profissionais de Saúde",
    "hero.cta.patients": "Para Pacientes",

    // How it works
    "how-it-works.title": "Carregue suas Informações Médicas",
    "how-it-works.subtitle":
      "Acesse seus registros médicos de forma segura e elegante com nossos dispositivos vestíveis com códigos QR.",
    "how-it-works.necklaces.title": "Colares Médicos",
    "how-it-works.necklaces.desc":
      "Elegantes colares dourados com códigos QR e cruz médica para acesso rápido a informações de emergência.",
    "how-it-works.design.title": "Design Elegante",
    "how-it-works.design.desc":
      "Design discreto e profissional que se integra perfeitamente ao seu estilo pessoal e vestuário médico.",
    "how-it-works.bracelets.title": "Pulseiras Inteligentes",
    "how-it-works.bracelets.desc":
      "Pulseiras com códigos QR circulares para acesso confortável e seguro aos seus dados médicos 24 horas por dia.",

    // Features
    "features.title": "Por que escolher HealthWeb?",
    "features.subtitle":
      "Construído com tecnologia blockchain de ponta para garantir que seus dados médicos sejam seguros, privados e acessíveis quando você precisar.",
    "features.secure.title": "Seguro e Criptografado",
    "features.secure.desc":
      "Seus registros médicos são criptografados e armazenados com segurança na blockchain, garantindo apenas acesso autorizado.",
    "features.qr.title": "Acesso por Código QR",
    "features.qr.desc":
      "Acesso rápido e seguro a registros médicos através de códigos QR para situações de emergência e consultas.",
    "features.control.title": "Controle do Paciente",
    "features.control.desc":
      "Os pacientes mantêm controle total sobre seus dados médicos, decidindo quem pode acessar suas informações.",
    "features.tech.title": "Tecnologia Médica Avançada",
    "features.tech.desc":
      "Integração perfeita com sistemas médicos existentes, permitindo que profissionais de saúde acessem e atualizem informações de pacientes de forma segura e eficiente.",
    "features.tech.compatibility": "Compatibilidade com sistemas hospitalares",
    "features.tech.mobile": "Acesso móvel para profissionais",
    "features.tech.sync": "Sincronização em tempo real",

    // Footer
    "footer.description": "Gestão descentralizada de registros médicos alimentada pela tecnologia blockchain.",
    "footer.developed": "Desenvolvido por",
    "footer.powered": "Alimentado por",
    "footer.contact": "Contato:",

    // Doctor page
    "doctor.title": "Portal Profissional Médico",
    "doctor.subtitle": "Acesse e gerencie registros médicos de pacientes com segurança",
    "doctor.scanner.title": "Scanner de Código QR",
    "doctor.scanner.subtitle": "Escaneie códigos QR de pacientes para acessar registros médicos",
    "doctor.scanner.button": "Iniciar Scanner",
    "doctor.records.title": "Registros Médicos Recentes",
    "doctor.documents.title": "Centro de Análise de Documentos",
    "doctor.documents.subtitle": "Ferramentas avançadas para processamento e análise de documentos médicos",
    "doctor.documents.pdf.title": "Análise de PDF",
    "doctor.documents.pdf.desc": "Análise inteligente de relatórios e documentos médicos",
    "doctor.documents.history.title": "Histórico Médico",
    "doctor.documents.history.desc": "Linha do tempo completa do histórico médico do paciente",
    "doctor.documents.xray.title": "Análise de Raio-X",
    "doctor.documents.xray.desc": "Análise de imagens radiológicas alimentada por IA",

    // Patient page
    "patient.title": "Portal do Paciente",
    "patient.subtitle": "Gerencie suas informações médicas com segurança",
    "patient.info.title": "Informações Médicas",
    "patient.qr.title": "Seu Código QR",
    "patient.qr.subtitle": "Compartilhe este código com profissionais de saúde",
    "patient.files.title": "Enviar Arquivos Médicos",
    "patient.files.subtitle": "Armazene seus documentos médicos com segurança",
    "patient.nearby.title": "Centros Médicos Próximos",
    "patient.nearby.subtitle": "Encontre instalações de saúde perto de você",

    // Common
    "common.loading": "Carregando...",
    "common.error": "Erro",
    "common.success": "Sucesso",
    "common.cancel": "Cancelar",
    "common.save": "Salvar",
    "common.upload": "Enviar",
    "common.download": "Baixar",
  },
}

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]) // Default to Spanish

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    // Store in localStorage for persistence
    localStorage.setItem("healthweb-language", language.code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-800/50">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {selectedLanguage.flag} {selectedLanguage.code.toUpperCase()}
          </span>
          <span className="sm:hidden">{selectedLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700/50 focus:bg-slate-700/50"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("es")

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.es] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

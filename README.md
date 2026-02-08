# Portfolio Website - Ammar Kirkukli

## Beschreibung
Professionelle Portfolio-Website eines Fachinformatikers für Anwendungsentwicklung mit Zertifizierungen in AWS Cloud Practitioner, Scrum Master und Python Programming.

## Features
- ✅ Responsive Design
- ✅ Portfolio-Sektion mit Projekten
- ✅ Kontaktformular mit AJAX
- ✅ PDF-Download für Zertifikate
- ✅ Social Media Integration
- ✅ Smooth Scrolling & Animationen

## Technologie-Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** PHP 7.4+
- **Datenbank:** MySQL
- **Libraries:** 
  - Boxicons
  - Typed.js
  - ScrollReveal.js

## Installation

### Voraussetzungen
- XAMPP oder ähnliche PHP/MySQL-Umgebung
- PHP 7.4 oder höher
- MySQL 5.7 oder höher

### Setup-Schritte

1. **Projekt klonen/herunterladen**
   ```bash
   git clone [repository-url]
   cd AmmarKirkukli
   ```

2. **Datenbank einrichten**
   ```bash
   # SQL-Datei importieren
   mysql -u root -p ammar < sql/ammar.sql
   ```

3. **Konfiguration anpassen**
   ```php
   // sql/config.php bearbeiten
   define('DB_HOST', 'localhost');
   define('DB_USER', 'root');
   define('DB_PASS', 'IhrPasswort');
   define('DB_NAME', 'ammar');
   ```

4. **Server starten**
   - XAMPP Control Panel öffnen
   - Apache und MySQL starten
   - Browser öffnen: `http://localhost/AmmarKirkukli`

## Datenbankstruktur

### Tabelle: `users`
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabelle: `ammar1`
```sql
CREATE TABLE ammar1 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Zertifizierung LONGBLOB NOT NULL,
    filename VARCHAR(255) DEFAULT NULL
);
```

## Sicherheitsverbesserungen
✅ Prepared Statements gegen SQL-Injection
✅ Input-Validierung
✅ Fehlerbehandlung & Logging
✅ HTTPS-Empfehlung für Produktion
✅ Separierte Konfigurationsdatei

## Verwendung

### Kontaktformular
Das Kontaktformular sendet Nachrichten via AJAX an die Datenbank ohne Seitenneuladen.

### PDF-Downloads
Zertifikate werden sicher aus der Datenbank geladen und zum Download angeboten.

## Deployment (Produktion)

1. **Konfiguration anpassen**
   ```php
   define('APP_ENV', 'production');
   ```

2. **HTTPS aktivieren**
   - SSL-Zertifikat installieren
   - HTTP zu HTTPS umleiten

3. **Sicherheitsmaßnahmen**
   - Starke Datenbankpasswörter verwenden
   - Verzeichnisrechte einschränken
   - PHP-Fehleranzeige deaktivieren

## ToDo / Verbesserungen
- [ ] CSRF-Token für Formulare implementieren
- [ ] Rate Limiting für Formular-Submissions
- [ ] E-Mail-Benachrichtigung bei Kontaktanfragen
- [ ] Admin-Panel für Content-Verwaltung
- [ ] Multi-Language-Support

## Kontakt
- **Name:** Ammar Kirkukli
- **Email:** ammarkirkukli6@gmail.com
- **LinkedIn:** [Ammar Kirkukli](https://www.linkedin.com/in/ammar-kirkukli-1a1160279/)
- **GitHub:** [AmmarKirkukli](https://github.com/AmmarKirkukli)

## Lizenz
© 2024 Ammar Kirkukli. Alle Rechte vorbehalten.

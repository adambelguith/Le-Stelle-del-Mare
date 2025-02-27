export const RestaurantSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Le Stelle del Mare",
          "image": "/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Viale Emilia 89",
            "addressLocality": "Pinarella",
            "addressRegion": "RA",
            "postalCode": "48015",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.2345",
            "longitude": "12.3456"
          },
          "telephone": "+39 0544 123456",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "12:00",
              "closes": "15:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "19:00",
              "closes": "00:00"
            }
          ],
          "priceRange": "€€-€€€",
          "servesCuisine": ["Italian", "Seafood"],
          "url": "https://www.lestelledelmare.com"
        })
      }}
    />
  );
}; 
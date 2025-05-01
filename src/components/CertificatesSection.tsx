import { Card, CardContent, CardTitle } from "@/components/ui/card";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2025",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "January 2025",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    date: "December 2024",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of the certifications I have earned to enhance my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CardTitle className="text-navy">{certificate.title}</CardTitle>
                <p className="text-gray-600">{certificate.issuer}</p>
                <p className="text-gray-500 text-sm">{certificate.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
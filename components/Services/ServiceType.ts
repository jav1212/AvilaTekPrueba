export type Service = {
  name: string;
  description: string;
  imageSrc: string;
};

export type ServiceSections = {
  title: string;
  subtitle: string;
  services: List<Service>;
};

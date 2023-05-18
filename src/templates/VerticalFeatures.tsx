import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Быстрый и надежный: почему скорость работы Хостерии является ее главным преимуществом."
    description="Оптимизированные серверы, использование SSD-накопителей и прочие технические характеристики, которые делают нашу работу быстрой и надежной."
  >
    <VerticalFeatureRow
      title="Удобные и гибкие тарифы"
      description="Возможность выбора оптимального тарифа в зависимости от ваших потребностей, использование скидок и промокодов, а также расскажу о том, как снизить затраты на хостинг при помощи нашего сервиса."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Современный и удобный"
      description="Наличие всех необходимых инструментов для управления сайтом, возможность настройки параметров сервера, а также другие функциональные возможности, которые делают работу с сайтом на нашем хостинге максимально удобной и простой, что позволит Вам сохранить средства, не тратя их на специалистов."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Безопасный и защищенный"
      description="Наши меры по обеспечению безопасности данных являются самыми передовыми и современными, наличие инструментов для защит систем."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

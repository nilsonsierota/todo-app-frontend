import { useEffect, useState } from 'react';
type IconProps = {
  variant: string;
};

export const Icon: React.FC<IconProps> = ({ variant }) => {
  const [iconSrc, setIconSrc] = useState<string>();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`../../../public/${variant}.svg`);
      setIconSrc(result.default);
    };

    mount();
  }, [variant]);

  return <img src={iconSrc} width="32px" height="32px" alt={variant} />;
};

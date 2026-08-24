import {
  ClipboardCheckIcon,
  DropletsIcon,
  Grid3x3Icon,
  HomeIcon,
  LayersIcon,
  PackageIcon,
  PaintRollerIcon,
  PanelLeftIcon,
  ShieldIcon,
  SquareIcon,
  WrenchIcon,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  ClipboardCheck: ClipboardCheckIcon,
  Droplets: DropletsIcon,
  Grid3x3: Grid3x3Icon,
  Home: HomeIcon,
  Layers: LayersIcon,
  Package: PackageIcon,
  PaintRoller: PaintRollerIcon,
  PanelLeft: PanelLeftIcon,
  Shield: ShieldIcon,
  Square: SquareIcon,
  Wrench: WrenchIcon,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? HomeIcon;
  return <Icon className={className} />;
}

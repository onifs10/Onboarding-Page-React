export type navItem = {
  id: number;
  name: string;
  isChecked?: boolean;
  active?: boolean;
};

export interface NavProps {
  navItems: navItem[];
  onSelect: (id: number) => void;
  selected: number;
}

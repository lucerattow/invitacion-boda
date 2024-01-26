import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { gsap } from 'gsap';
import classNames from "classnames"
import { Item } from "@/interfaces"
import './Navbar.scss';

export type NavbarProps = {
  className?: string
  items: Item[]
}

export const Navbar: React.FC<NavbarProps> = ({ className, items }) => {
  const $root = useRef<HTMLDivElement>(null);
  const $indicator1 = useRef<HTMLDivElement>(null);
  const $indicator2 = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);

    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [active]);

  const animate = () => {
    if ($root.current && $root.current.children[active]) {
      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $root.current.children[active];
      const { width, height, top, left } = activeItem.getBoundingClientRect();

      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: .8
      };

      if ($indicator1.current && $indicator2.current) {
        gsap.to($indicator1.current, settings);
        gsap.to($indicator2.current, { ...settings, duration: 1 });
      }
    }
  };

  return (
    <div ref={$root} className={classNames(className, 'menu')}>
      {items.map((item, index) => (
        <Link
          key={item.name}
          className={`item ${active === index ? 'active' : ''}`}
          onClick={() => setActive(index)}
          to={item.url}
        >
          {item.name}
        </Link>
      ))}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  )
}

export default Navbar
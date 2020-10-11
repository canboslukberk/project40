import React from 'react'
import Blanket from './Blanket'
import Menu from './Menu'

export default function Dropdown({ children, isOpen, target, onClose }) {
    return (
        <div css={{ position: 'relative' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
      </div>
    )
}

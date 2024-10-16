import React from 'react'

type Props = {
    className?: string
    fill?: string
}

export const Logo = (props: Props) => (
    <svg className={props?.className} width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="33.7188" width="45.6498" height="47.2758" transform="rotate(45 33.7188 0)" fill={props?.fill || "#28B81A"} />
        <rect x="34" y="10.2793" width="31" height="2" fill={props?.fill || "#28B81A"} />
        <rect x="34" y="4.2793" width="36" height="2" fill={props?.fill || "#28B81A"} />
        <rect x="34" y="16.2793" width="43" height="2" fill={props?.fill || "#28B81A"} />
        <rect x="34" y="31.2793" width="43" height="2" fill={props?.fill || "#28B81A"} />
        <rect x="34" y="23.2793" width="37" height="2" fill={props?.fill || "#28B81A"} />
        <rect width="37" height="2" transform="matrix(1 0 0 -1 34 61.2793)" fill={props?.fill || "#28B81A"} />
        <rect width="34" height="2" transform="matrix(1 0 0 -1 34 48.2793)" fill={props?.fill || "#28B81A"} />
        <rect width="30" height="2" transform="matrix(1 0 0 -1 34 55.2793)" fill={props?.fill || "#28B81A"} />
        <rect width="40" height="2" transform="matrix(1 0 0 -1 34 41.2793)" fill={props?.fill || "#28B81A"} />
    </svg>

)
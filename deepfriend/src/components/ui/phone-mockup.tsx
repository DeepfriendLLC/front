import type { ReactNode } from "react";

export const PHONE_FRAME = { x: 20, y: 8, w: 160, h: 344, rx: 24 };
export const PHONE_SCREEN = { x: 32, y: 48, w: 136, h: 280, rx: 12 };

export type PhoneMockupClasses = {
  phone: string;
  phoneFrame: string;
  phoneScreen: string;
  phoneLine: string;
  phoneHome: string;
};

type PhoneMockupProps = {
  clipPathId: string;
  classes: PhoneMockupClasses;
  children: ReactNode;
  ariaLabel?: string;
};

export default function PhoneMockup({
  clipPathId,
  classes,
  children,
  ariaLabel,
}: PhoneMockupProps) {
  const frame = PHONE_FRAME;
  const screen = PHONE_SCREEN;
  const screenBottom = screen.y + screen.h;
  const frameBottom = frame.y + frame.h;
  const homeY = (screenBottom + frameBottom) / 2;

  return (
    <figure className={classes.phone}>
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      >
        <defs>
          <clipPath id={clipPathId}>
            <rect
              x={screen.x}
              y={screen.y}
              width={screen.w}
              height={screen.h}
              rx={screen.rx}
            />
          </clipPath>
        </defs>

        <rect
          x={frame.x}
          y={frame.y}
          width={frame.w}
          height={frame.h}
          rx={frame.rx}
          className={classes.phoneFrame}
        />
        <rect
          x={screen.x}
          y={screen.y}
          width={screen.w}
          height={screen.h}
          rx={screen.rx}
          className={classes.phoneScreen}
        />

        <rect
          x={100 - 20}
          y={frame.y + 14}
          width={40}
          height={5}
          rx={2.5}
          className={classes.phoneLine}
        />

        <g clipPath={`url(#${clipPathId})`}>{children}</g>

        <rect
          x={100 - 24}
          y={homeY - 2.5}
          width={48}
          height={5}
          rx={2.5}
          className={classes.phoneHome}
        />
      </svg>
    </figure>
  );
}

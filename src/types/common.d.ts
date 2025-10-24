// Common types used throughout the application

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// For components that accept children
export type WithChildren<T = object> = T & {
  children?: React.ReactNode;
};

// For components that accept className
export type WithClassName<T = object> = T & {
  className?: string;
};

// For components that accept both children and className
export type WithChildrenAndClassName<T = object> = WithChildren<WithClassName<T>>;

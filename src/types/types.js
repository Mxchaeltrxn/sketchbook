// @flow

type TODO = any;

export type Layer = {
  id: number,
  type: string,
  component: string,
  name: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options?: TODO
};

export type Predicate<T> = (item: T) => boolean;

export type Matrix = {
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
};

export type SketchbookDocument = {
  type: "SketchbookDocument",
  layers: Array<Layer>
};

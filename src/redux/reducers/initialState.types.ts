export type initialStateT = {
  classes: classesT;
  students: studentsT;
  loading: {
    isLoading: boolean;
    loadingError: boolean;
  };
};

export type classesT = {
  classes: Array<classT>;
  singleClass: null;
};

export type studentsT = {
  students: Array<studentT>;
  singleStudent: null;
};

export type classT = {
  students: Array<string>;
  name: string;
  id: string;
};

export type studentT = {
  classes: Array<string>;
  name: string;
  id: string;
};

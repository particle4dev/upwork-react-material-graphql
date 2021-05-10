export type RowTag = {
  id: string;
  type?: string;
  avatar: string;
  label: string;
};

export type RowSubject = {
  label: string;
  message: number;
};

export type DataRow = {
  id: string;
  status: string;
  subject: RowSubject;
  dueOn: string;
  assignedBy: string;
  tags: RowTag[];
  type: string
};

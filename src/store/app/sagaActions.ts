export const DUMMY_ACTION = 'DUMMY_ACTION';

const SagaActions = {
  dummyAction: (payload: string) => {
    return { type: DUMMY_ACTION, payload };
  }
};

export default SagaActions;

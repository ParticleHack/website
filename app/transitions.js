export default function () {
  this.transition(
    this.fromRoute('projects'),
    this.toRoute('project'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

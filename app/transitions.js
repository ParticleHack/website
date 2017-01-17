export default function () {
  this.transition(
    this.fromRoute('projects'),
    this.toRoute('project'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

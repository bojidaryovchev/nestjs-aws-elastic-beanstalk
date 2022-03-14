export default function (): boolean {
  return process.env.ENVIRONMENT === 'production';
}

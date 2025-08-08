'use server';

import { requestForLog } from '@/services/authService';
import { getUserProfile } from '@/services/userService';

const submitLoginForm = async (formData) => {
  try {
    const response = await requestForLog();

    if (response.status === 200) {
      const userProfile = await getUserProfile(formData.userId);
      return { success: true, message: response.message, userProfile };
    }
    return { success: false, message: 'Login failed' };
  } catch (error) {
    return { success: false, message: error.message || 'An error occurred' };
  }
};

export default submitLoginForm;
